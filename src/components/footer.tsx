"use client"

import { Card, CardHeader, CardTitle } from "./ui/card"

const teamMembers = [
    {   name: "Mohar Maity", 
        avatar:"M",
        title:"Team Lead and Full Stack Developer"
    },
    {   name: "Srisant Panigrahi", 
        avatar:"S",
        title:"Frontend Developer"
    },
    {   name: "Koushik Sripathi ", 
        avatar:"K",
        title:"Designer and Presenter"
    },
    
]
export const Footer =() =>{
    return(
        <>
        
        <footer><h1 className="text-center text-4xl text-white font-extrabold mb-10">Team Quantum Bits</h1>
            <h3 className="text-center text-4xl text-white font-extrabold mb-10">
                Members
            </h3>
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 pl-60 ">
                {teamMembers.map((item)=>(
                    <Card key={item.name} className="bg-[#192339] border-none text-white justify-center">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-x-2">
                            <div>
                                    <p className="item-center">{item.name}</p>
                                    <p className="text-zinc-400 text-sm">{item.title}</p>
                                </div>
                            </CardTitle>
                                
                        </CardHeader>
                    </Card>))}
            </div></footer>
        </>
    )
}