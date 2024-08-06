// Define DOM elements
const toggleButton = document.querySelector('#toggle-button')
const root = document.querySelector(':root')
const storageKey = 'color-mode'
const defaultMode = 'light-mode'

// Load the localStorage
const loadColorMode = () => {
    const colorMode = localStorage.getItem('color-mode')
    root.classList.add(colorMode || defaultMode)
    // updateToggleButton()
    // localStorage.getItem('color-mode')
}

loadColorMode()

//Toggle the color mode
toggleButton.addEventListener('click', () => {
  saveColorMode()
})

//Save localStorage
const saveColorMode = () => {
    // Check if root element has a class of dark-mode
    const currentMode = root.classList.contains('dark-mode') ? 'light-mode' : 'dark-mode'
    root.classList.remove('light-mode', 'dark-mode')
    root.classList.add(currentMode)
    localStorage.setItem(storageKey, currentMode)
 }


 