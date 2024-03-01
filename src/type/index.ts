
export type Usertype={
    id: string,
    name: string,
    email: string,
     phone: string,
     location: string,
     destination: string,
     car?: {
        make: string,
        model: string,
        year : number,
        color: string,
        plateNumber: string
      },
      preferences?: {
         "smokingAllowed": false,
         "petsAllowed": true,
         "musicPreference": "Any",
         "maxPassengers": 3
       },
 }
 enum Gender  {
  Male,
  Famale
}


 export type PassangerType={
   id: string,
   name: string,
   email: string,
   gender:Gender,
   phone: string,
   location: string,
   destination: string,
   preferences?: {
     smokingAllowed: false,
     petsAllowed: true,
     musicPreference: "Pop",
     partySize: 2
   }
 }

 export type PartialPassanger = Partial<PassangerType>
 export type NewNewPassanger = Omit<PassangerType, "id">
 export type PartialUser = Partial<Usertype>
 export type NewUser = Omit<Usertype, "id">
 

 export type TRide={
    id: string,
    driver_id: string,
    passenger_id: string,
    starting_point: string,
    destination: string,
    scheduled_date: string,
    scheduled_time: Tscheduled_time,
    status: TStatus,
    agreement: TAgreement,
    "reviews": TReviews[]
}

export type TRideCardProp={
    id: string,
    driver_id: string,
    passenger_id: string,
    starting_point: string,
    destination: string,
    scheduled_date: string,
    scheduled_time: Tscheduled_time,
    status: TStatus,
    agreement: TAgreement,
    "reviews": TReviews[]
}
type Tscheduled_time ={
    start:string,
    end:string
}
type TAgreement ={
    agreement_id: string,
      fare: string,
      additional_notes: string
}
type TStatus = "scheduled"|"Unscheduled"

type TReviews = {
    review_id: string,
    review_type: string,
    from_user: string,
    to_user: string,
    rating: number,
    comment: string,
}