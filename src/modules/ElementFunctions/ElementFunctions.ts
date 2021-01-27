export function createElement(tag:string, className?:string):HTMLElement {
    const element = document.createElement(tag)

    if (className) element.classList.add(className)

    return element
  }
  
  export function getElement(selector:string):Element {
    const element = document.querySelector(selector)
    if(element == null){
      throw new Error(`Не удалось найти контейнер ${selector} для ползунка`)
    }else
    {
      return element
    }
  }
