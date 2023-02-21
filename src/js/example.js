import Loader from "./modules/loader"

import Sumbiot, {Modal} from "./library/sumbiot"

import {apiService} from "./services/api.service";

let loader = Loader.create(
  "lottie",
  {
    loadingText: 'Подождите, приложения загружается',
    successText: 'Приложение загружено',
    failureText: 'Приложение не загружено'
  }
)

document.querySelector('.sContainer').append(loader.loading())

setTimeout(() => {
  loader.success({
    loop: false,
    speed: 1.5
  })
}, 2000)

setTimeout(() => {
  loader.remove()
}, 4000)

