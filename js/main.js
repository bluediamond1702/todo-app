/* Create Todo List Item */
document.getElementById('input-form').onkeypress = function(e){
  if(e.keyCode === 13 || e.which === 13) {
    var itemValue = this.value;
    if (itemValue === '') { return; };
    this.value = '';

    document.getElementById('todo-list').insertAdjacentHTML('beforeend', inputTodoItem(itemValue));

    document.querySelector('footer').style.display = 'block';
    document.getElementById('toggle-all').checked = false;
    itemCount();
  }
  completedItem();
  editTodoItem();
  removeTodoItem();
}


/* All Button */
document.querySelector('.btn-all').onclick = function() {
  selectedButton(this);
  document.querySelectorAll('.view').forEach(function(div) {
    div.parentNode.classList.remove('hidden');
  })
}

/* Complete Button */
document.querySelector('.btn-complete').onclick = function() {
  selectedButton(this);
  document.querySelectorAll('.view').forEach(function(div) {
    removeHiddenClass(div);
    if(!div.parentNode.classList.contains('completed')) {
      div.parentNode.classList.add('hidden');
    }
  });
}

/* Active Button */
document.querySelector('.btn-active').onclick = function() {
  selectedButton(this);
  document.querySelectorAll('.view').forEach(function(div) {
    removeHiddenClass(div);
    if(div.parentNode.classList.contains('completed')) {
      div.parentNode.classList.add('hidden');
    }
  });
}

/* Clear completed */
document.getElementById('btn-clear').onclick = function() {
  document.querySelectorAll('.completed').forEach(function(li) {
    li.remove();
  })
  this.style.display = 'none';
  document.getElementById('toggle-all').checked = false;
  if(document.querySelectorAll('.view').length === 0) {
    hideFooter();
  }
  itemCount();
}

/* Toggle All */
document.getElementById('toggle-all').onclick = function() {
  if(this.checked) {
    document.querySelectorAll('.view').forEach(function(div) {
      div.parentNode.classList.add('completed');
      div.querySelector('.toggle').checked = true;
    });
    document.getElementById('btn-clear').style.display = "block";
    itemCount();
  } else {
    document.querySelectorAll('.view').forEach(function(div) {
      div.parentNode.classList.remove('completed');
      div.querySelector('.toggle').checked = false;
    });
    document.getElementById('btn-clear').style.display = "none";
    itemCount();
  }
}

