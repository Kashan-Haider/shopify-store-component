import Image from 'next/image'
import React from 'react'
import CollectionItem from './CollectionItem'

const Collection = () => {
  return (
    <div className='grid sm:grid-cols-5 grid-cols-1 text-gray-50' >
        <div className='grid col-span-2' >
        <CollectionItem image =  {"https://images.unsplash.com/photo-1523779105320-d1cd346ff52b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTY5NDI0MA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"} />
        </div>
        <div className='sm:grid col-span-3 hidden ' >
            <CollectionItem image = {"https://img.freepik.com/free-photo/wome-s-bags-close-up_1303-13440.jpg?size=626&ext=jpg&uid=R93803586&ga=GA1.1.426654676.1688388404&semt=ais"} />
        </div>
        <div className='sm:grid col-span-3 hidden ' >
            <CollectionItem image= {"https://img.freepik.com/free-photo/stylish-woman-summer-outfit-isolated-posing-fashion-trend-isolated_285396-472.jpg?size=626&ext=jpg&uid=R93803586&ga=GA1.1.426654676.1688388404&semt=ais"}/>
        </div>
        <div className='sm:grid col-span-2 hidden '>
            <CollectionItem image= {"https://images.unsplash.com/photo-1554632084-1dcbc408d11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdvbWVuJTIwcHVyc2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"} />
        </div>
    </div>
  )
}

export default Collection