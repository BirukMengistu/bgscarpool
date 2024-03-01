import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const RideCard = ({details}) => {
 



   
  return (
    <div className="container border rounded-md my-3 p-4 border-radius">
      <div className="relative border-s sm:mx-5">
        <div className="mx-5 mb-6 ms-4">
          <div className="absolute -z-0 w-3 h-3 bg-accent rounded-full mt-1.5 -start-1.5"></div>
          <time className="mb-1 text-sm font-normal leading-none text-muted-foreground">{details.scheduled_time.start}</time>
          <h3 className="text-md md:text-lg font-semibold">{details?.starting_point}</h3>
        </div>
        <div className="mx-5 mb-6 ms-4">
          <div className="absolute -z-0 w-3 h-3 bg-accent rounded-full mt-1.5 -start-1.5"></div>
          <time className="mb-1 text-sm font-normal leading-none text-muted-foreground">{details.scheduled_time.end}</time>
          <h3 className="text-md md:text-lg font-semibold">{details?.destination}</h3>
        </div>
        <h1 className="absolute -z-0 text-lg md:text-2xl font-bold top-0 right-0">{0} birr </h1>
      </div>
      <div>
        <div className="inline-flex items-center">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>Profile</AvatarFallback>
          </Avatar>
          <span className="flex-grow flex flex-col pl-4">
            <span className="title-font font-medium">{'Birdev'}</span>
            <span className="text-muted-foreground text-xs tracking-widest mt-0.5">DEVELOPER</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default RideCard