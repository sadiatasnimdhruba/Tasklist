let taskList=document.querySelector('ul');
let taskInput=document.querySelector('#new_task');
let filter=document.querySelector('#task_filter');
let clearBtn=document.querySelector('#clear_task_btn');
let formInput=document.querySelector('.width');


//form.addEventListener('submit',addTask);*/
taskList.addEventListener('click',removeTask);
clearBtn.addEventListener('click',clearTask);
filter.addEventListener('keyup',filterTask);
formInput.addEventListener('focus',test);
filter.addEventListener('focus',test);


function test(e)
{
	e.target.style.background='rgb(246 210 254)';
}


function addTask()
{
      if(taskInput.value==='')
	{
		alert("Add a task!!!");
	}
	else
	{
		let li=document.createElement('li');
        li.appendChild(document.createTextNode(taskInput.value+ " "));

		let link=document.createElement('a');
	    link.setAttribute('href','#');
	    link.innerHTML='X';
	    li.appendChild(link);
	     taskList.appendChild(li);
		taskInput.value='';
	}
}

function removeTask(e)
{
	if(e.target.hasAttribute("href"))
	{
		if(confirm("Are you sure?!"))
		{
			let ele=e.target.parentElement;
			ele.remove();
		}
	}
}

function clearTask(e) 
{
	taskList.innerHTML=" ";
}

function filterTask(e)
{
	let text=e.target.value.toLowerCase();

	document.querySelectorAll('li').forEach(task =>
	{
		let item=task.firstChild.textContent;
		if(item.toLowerCase().indexOf(text)!=-1)
		{
		   task.style.display='block';
		}
		else
		{
			task.style.display='none';
		}
	});
}
