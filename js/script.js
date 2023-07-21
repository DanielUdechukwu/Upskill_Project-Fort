const item1 = document.querySelector('.item1')
const item2 = document.querySelector('.item2')
const item3 = document.querySelector('.item3')
const details = document.querySelector('.details')
const map = document.querySelector('.map')
const areaGuide = document.querySelector('.area-guide')

item1.addEventListener('click', () => {
  console.log("clicked")
  if (details.classList.contains("block")){
    details.classList.remove('block')
    map.classList.add('block')
    areaGuide.classList.add('block')
    item1.classList.add('active')
    item2.classList.remove('active')
    item3.classList.remove('active')
  }
})

item2.addEventListener('click', () => {
  console.log("clicked")
  if (map.classList.contains("block")){
    map.classList.remove('block')
    details.classList.add('block')
    areaGuide.classList.add('block')
    item2.classList.add('active')
    item3.classList.remove('active')
    item1.classList.remove('active')
  }
})
item3.addEventListener('click', () => {
  console.log("clicked")
  if (areaGuide.classList.contains("block")){
    areaGuide.classList.remove('block')
    details.classList.add('block')
    map.classList.add('block')
    item3.classList.add('active')
    item2.classList.remove('active')
    item1.classList.remove('active')
  }
})