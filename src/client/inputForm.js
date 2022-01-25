export default function createFormElement() {

    let formElement = document.createElement('div');
    formElement.classList.add('inputForm');

    formElement.innerHTML = '<form> \
    <h1>Add a new To-Do item</h1>   \
    <br>    \
    <label for="Title"><b>Title</b></label> \
    <input type="text" placeholder="Title" name="Title" required>   \
    <br>    \
    <label for="Description"><b>Description</b></label> \
    <input type="text" placeholder="description" name="Description" required>   \
    <br>    \
    <label for="dueDate"><b>Due Date</b></label>    \
    <input type="date" name="dueDate" required> \
    <br>    \
    <label for="priority"><b>Priority</b></label>   \
    <br>    \
    <input type="radio" id="Low" name="priority" value="Low">   \
    <label for="Low">Low</label><br>    \
    <input type="radio" id="Med" name="priority" value="Med">   \
    <label for="Med">Medium</label><br> \
    <input type="radio" id="High" name="priority" value="high"> \
    <label for="High">High</label>  \
</form>';

    return formElement;
}