import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Microscope,
  Languages,
  Users,
  FileCheck,
  Download,
  Sparkles,
} from "lucide-react";
import CVData from "@/jsons/cv.json";


type NodeType = {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  position: string;
};


const nodes: NodeType[] = [
  {
    id: "community",
    title: "Community",
    icon: Users,
    color: "from-emerald-400 to-green-600",
    position: "left-[28%] top-[5%]",
  },
  {
    id: "education",
    title: "Education",
    icon: GraduationCap,
    color: "from-indigo-500 to-violet-600",
    position: "left-[12%] bottom-[18%]",
  },
  {
    id: "experience",
    title: "Academic Experience",
    icon: Microscope,
    color: "from-sky-400 to-cyan-600",
    position: "left-[42%] top-[38%]",
  },
  {
    id: "reviewer",
    title: "Reviewer",
    icon: FileCheck,
    color: "from-fuchsia-500 to-pink-600",
    position: "right-[15%] top-[18%]",
  },
  {
    id: "languages",
    title: "Languages",
    icon: Languages,
    color: "from-orange-400 to-amber-600",
    position: "right-[22%] bottom-[18%]",
  },
];


export default function CVWorld() {

  const [selected,setSelected] = useState<string|null>(null);


  const renderContent = () => {

    switch(selected){

      case "education":
        return (
          <div className="space-y-4">
          {
            CVData.education.map(e=>(
              <div key={e.key}>
                <b>{e.degree}</b>
                <p className="text-sm text-gray-600">
                  {e.field}
                </p>
                <p className="text-xs text-gray-400">
                  {e.institution} • {e.period}
                </p>
              </div>
            ))
          }
          </div>
        );


      case "experience":
        return (
          <div className="space-y-4">
          {
            CVData.workExperience.map(e=>(
              <div key={e.key}>
                <b>{e.position}</b>
                <p className="text-sm text-gray-600">
                  {e.institution}
                </p>
                <p className="text-xs text-gray-400">
                  {e.period}
                </p>
              </div>
            ))
          }
          </div>
        );


      case "languages":
        return (
          <div className="flex flex-wrap gap-2">
          {
            CVData.profile.languages.map(l=>(
              <span
              key={l}
              className="
              rounded-full
              bg-orange-100
              px-3 py-1
              text-sm
              "
              >
                {l}
              </span>
            ))
          }
          </div>
        );


      case "reviewer":
        return (
          <div className="flex flex-wrap gap-2">
          {
            CVData.reviewerActivities.map(r=>(
              <span
              key={r}
              className="
              rounded-full
              bg-indigo-100
              px-3 py-1
              text-sm
              "
              >
                {r}
              </span>
            ))
          }
          </div>
        );


      case "community":
        return (
          <div className="space-y-4 text-sm">
            {
              CVData.profile.engagements.womenInVision.map(i=>
                <p key={i}>{i}</p>
              )
            }

            {
              CVData.profile.engagements.volunteer.map(i=>
                <p key={i}>{i}</p>
              )
            }
          </div>
        );


      default:
        return null;
    }
  };



return (

<section
id="cv"
className="
relative
overflow-hidden
bg-gradient-to-b
from-indigo-50
via-white
to-white
py-16
"
>


<div className="
absolute
left-0
top-0
h-72
w-72
rounded-full
bg-indigo-200/30
blur-3xl
"/>


<div className="container mx-auto px-6">


<h2 className="
text-center
text-4xl
font-bold
">
My Journey
</h2>


<p className="
mx-auto
mt-3
max-w-xl
text-center
text-gray-600
">
A visual map of my academic profile and activities.
</p>



<div
className="
relative
mx-auto
mt-10
hidden
h-[420px]
max-w-4xl
lg:block
"
>


{/* connections */}

<svg
className="
absolute
inset-0
h-full
w-full
"
>

<path
d="
M50% 50%
C40% 30%,30% 20%,25% 10%
M50% 50%
C25% 60%,20% 70%,15% 80%
M50% 50%
C75% 30%,85% 20%,90% 15%
M50% 50%
C70% 70%,80% 80%,85% 85%
"
stroke="#c7d2fe"
strokeWidth="1"
fill="none"
/>

</svg>



{/* center */}

<motion.div
animate={{
scale:[1,1.05,1]
}}
transition={{
duration:4,
repeat:Infinity
}}
className="
absolute
left-1/2
top-1/2
-translate-x-1/2
-translate-y-1/2
flex
h-28
w-28
flex-col
items-center
justify-center
rounded-full
bg-gradient-to-br
from-indigo-600
to-blue-500
text-white
shadow-2xl
"
>

<Sparkles size={25}/>

<span className="mt-2 text-xs font-bold text-center">
Research
<br/>
Profile
</span>

</motion.div>



{
nodes.map((node,index)=>{

const Icon=node.icon;

return (

<motion.button
key={node.id}
className={`
absolute
${node.position}
`}
onClick={()=>setSelected(node.id)}
initial={{opacity:0,scale:.7}}
whileInView={{
opacity:1,
scale:1
}}
transition={{
delay:index*.1
}}
whileHover={{
scale:1.12
}}
animate={{
y:[0,-5,0]
}}
>

<div
className={`
h-24
w-24
rounded-full
bg-gradient-to-br
${node.color}
text-white
shadow-xl
flex
flex-col
items-center
justify-center
`}
>

<Icon size={24}/>

<span
className="
mt-2
px-2
text-center
text-[11px]
font-semibold
"
>
{node.title}
</span>

</div>


</motion.button>

)

})
}



<AnimatePresence>

{
selected &&

<motion.div

initial={{
opacity:0,
scale:.9
}}

animate={{
opacity:1,
scale:1
}}

exit={{
opacity:0,
scale:.9
}}

className="
absolute
left-1/2
top-1/2
z-20
w-[340px]
-translate-x-1/2
-translate-y-1/2
rounded-3xl
bg-white/90
p-6
shadow-2xl
backdrop-blur-xl
"

>

<button
onClick={()=>setSelected(null)}
className="
absolute
right-4
top-3
text-gray-400
"
>
×
</button>


<h3 className="
mb-5
text-xl
font-bold
"
>
{
nodes.find(n=>n.id===selected)?.title
}
</h3>


{renderContent()}


</motion.div>

}

</AnimatePresence>


</div>



{
CVData.download &&

<div className="mt-8 flex justify-center">

<motion.a
whileHover={{scale:1.05}}
href={CVData.download.url}
target="_blank"
rel="noreferrer"
className="
flex
items-center
gap-2
rounded-full
bg-indigo-600
px-7
py-3
text-white
shadow-lg
"
>

<Download size={17}/>

{CVData.download.label}

</motion.a>

</div>

}



</div>


</section>

);

}