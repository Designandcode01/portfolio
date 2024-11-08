//imports general anatomy
import IntroAnatomyQuiz from '../components/anatomy/IntroAnatomyQuiz'
import Bonequiz from "../components/anatomy/Bonequiz"
import Cartilagequiz from "../components/anatomy/Cartilagequiz"
import Integumentaryquiz from "../components/anatomy/Integumentaryquiz"
import Jointquiz from "../components/anatomy/Jointquiz"
import Musclequiz from "../components/anatomy/Musclequiz"
import Nervousquiz from "../components/anatomy/Nervousquiz"
//imports embryology
import E1cellcyclegametogenesis from "../components/embryology/E1cellcyclegametogenesis"
import E2ovutoimplantation from "../components/embryology/E2ovutoimplantation"
import E3bilaminargermdisc from "../components/embryology/E3bilaminargermdisc"
import E4trilaminargermdisc from "../components/embryology/E4trilaminargermdisc"
import E5embryonicperiod from "../components/embryology/E5embryonicperiod"
//imports histology
import H1cellmembrane from "../components/histology/H1cellmembrane"
import H2cellorganelles from "../components/histology/H2cellorganelles"
import H3cellnucleus from "../components/histology/H3cellnucleus"
import H4epithelium from "../components/histology/H4epithelium"
import H5connectivetissue from "../components/histology/H5connectivetissue"


const FoundationModule = () => {
  return (
    <div className='bg-slate-500'>
      <div>
       
       <h1>Welcome to Quiz - Foundation Module!</h1>

      </div>

      <div className='bg-slate-400 grid grid-cols-1 md:grid-cols-2 gap-2'>
          <div>
      {/* General Anatomy */}
      <h1 className='flex justify-center items-center pt-5 font-bold text-blue-900 underline'>Welcome to the General Anatomy Quiz!</h1>
       <IntroAnatomyQuiz />
       <Bonequiz />
        <Cartilagequiz />
        <Integumentaryquiz />
        <Jointquiz />
        <Musclequiz />
        <Nervousquiz />
          </div>

          <div>
      {/* General Embryology */}
      <h1 className='flex justify-center items-center pt-5 font-bold text-blue-900 underline'>Welcome to the Embryology Quiz!</h1>
      <E1cellcyclegametogenesis />
      <E2ovutoimplantation />
      <E3bilaminargermdisc />
      <E4trilaminargermdisc />
      <E5embryonicperiod />
      
          </div>

          <div>
      {/* General Histology */}
      <h1 className='flex justify-center items-center pt-5 font-bold text-blue-900 underline'>Welcome to the Histology Quiz!</h1>
      <H1cellmembrane />
      <H2cellorganelles />
      <H3cellnucleus />
      <H4epithelium />
      <H5connectivetissue />
          </div>
        </div>
    </div>
  )
}

export default FoundationModule