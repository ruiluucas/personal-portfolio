import { Popover } from '@headlessui/react'


export default function Header() {

  return (
    <header className="absolute left-0 right-0 z-10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <a className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
            Bruno
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Jordan
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Renan
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Rui
          </a>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  )
}
