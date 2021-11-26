import {Courses, Crown, Location} from '../../components/Icons'

import { PrimaryCard } from '../../components/Card'
import SmallCard from '../SmallCard'

export default function Portfolio() {
  return (
    <div>
      <PrimaryCard color="white">
        <div>
          <div className="relative">
            <img className="rounded-2xl h-40  w-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzsnU0qrc7XKSXB_otTnrsuuyHW97M1IIQ7w&usqp=CAU" alt=""/>
            <div className="absolute -bottom-12 left-4 p-2 bg-purple-300 rounded-xl ring-4 ring-white">
              <img
                className="inline-block h-16 w-16 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
          </div>
          <div className="ml-4 mt-16">
            <h1 className="text-lg font-bold">Zahid Ronty </h1>
            <div className="flex text-gray-600 mt-2">
              <Location className="text-gray-500"/>
              <span className="text-sm ml-1">Dhaka, Bangladesh</span>
            </div>
            <div className="flex justify-between mt-8">
              <PrimaryCard color="purple">
                <SmallCard icon={Courses} number="24" name="Courses"/>
              </PrimaryCard>
              <PrimaryCard color="purple">
                <SmallCard icon={Crown}  number="18" name="Certifications"/>
              </PrimaryCard>
            </div>
          </div>
        </div>
      </PrimaryCard>
      
    </div>
    
  )
}
