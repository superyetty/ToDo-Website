function keyDown (event){
  if(event.key === 'Enter'){
    itemInputfunc()
  }
}

const newItem= [{input: 'Make Dinner'}]

renderOutputFunc()

function renderOutputFunc () {
  let ItemHTML = ''

  for (let i = 0; i < newItem.length; i++) {
    const myItemObject = newItem[i]
    const input = myItemObject.input
    const html = `
      <div>${input}</div>
      <div class="delete" onclick="
        newItem.splice(${[i]}, 1)
        renderOutputFunc()
        ">X
      </div>
    `
    ItemHTML += html
  }
  console.log(ItemHTML)
  document.querySelector('.js-output')
    .innerHTML = ItemHTML

}

function itemInputfunc() {
  const itemInputElement = document.querySelector('.js-item-input')
  const Input = itemInputElement.value
  newItem.push({input: Input})
  console.log(newItem)

  itemInputElement.value = ''

  renderOutputFunc()
}