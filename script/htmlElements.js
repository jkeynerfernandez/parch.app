const InputElement = function() {
  const createInput = document.createElement('div');
  createInput.setAttribute('contenteditable', 'true');
  createInput.setAttribute('data-placeholder', 'should work')
  createInput.classList.add("input-text", "border-0", "w-100", "bg-dark", "text-white",
    "text-break");
  // createInput.innerText = "Write something..."
  return createInput;
}

export {InputElement};