import RideCard from '../Components/RideCard'
import Search from '../Components/Search'
import Sidebar from '../Components/Sidebar'
import { Dialog, DialogContent, DialogTrigger } from '../Components/ui/dialog'
import { Skeleton } from '../Components/ui/skeleton'
import useFetchRide from '../hooks/useFetchRide'
import { MoveRight, SlidersHorizontal } from 'lucide-react'
import { Link } from 'react-router-dom'

const SearchPage = () => {

  const { loading, data } = useFetchRide()

  return (
    <main>
      <div className="z-10 flex justify-center items-center border-b bg-background p-8">
        <Search />
        <Dialog>
          <DialogTrigger className="md:hidden border border-lg p-2 bg-background absolute right-0">
              <SlidersHorizontal />
          </DialogTrigger>
          <DialogContent>
            <Sidebar />
          </DialogContent>
        </Dialog>
      </div>
      <div className="container p-0 max-w-screen-xl grid md:grid-cols-5">
        <div className="hidden md:block">
          <div className="sticky top-16">
            <Sidebar />
          </div>
        </div>
        <div className="col-span-3 py-6 md:col-span-4 lg:border-l">
          <div className="container">
            <h3> Bole <MoveRight className='inline-block' /> Pizza</h3>
            <h3>{data?.length} rides available</h3>
            {loading && <>
              <Skeleton className="h-[200px] w-full my-3 p-4 rounded-xl" />
              <Skeleton className="h-[200px] w-full my-3 p-4 rounded-xl" />
            </>}
            {data?.map((ride, index) => 
              <Link key={index} to={`/ride/${ride._id}`}>
                <RideCard key={index} details={ride} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

export default SearchPage