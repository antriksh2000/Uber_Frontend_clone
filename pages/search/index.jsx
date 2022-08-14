import {React} from 'react'
import tw from "tailwind-styled-components"

export default function index() {
  return (

    <>

      <Search>
        <a href="././"></a>
        <PickUp placeholder="Enter your Pick Up Point"></PickUp>
        <WhereTo placeholder="Where To"></WhereTo>
      </Search>

      <SavedPlace> Saved Places</SavedPlace>

        <SearchPage>
      <ConfirmLocation href="./" >Confirm Location</ConfirmLocation>

    </SearchPage>
    </>
  )
}

const Search =tw.div` 
 flex flex-col m-10 text-black 
`
const PickUp =tw.input`
bg-gray-200 border lg:h-10  mt-5
`
const WhereTo =tw.input`
bg-gray-200 border lg:h-10 mt-5

`
const SavedPlace =tw.button`
font-bold mx-10
`
const ConfirmLocation =tw.a`

 flex bg-black text-white w-full h-10 items-center justify-center rounded mt-5
`
const SearchPage =tw.div`
flex-1 bg-gray-100  h-screen
`