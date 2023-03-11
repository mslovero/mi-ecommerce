import Sdata from "./Sdata"

const SlideCard = () => {
    return(
      <>
        {Sdata.map((value,index) => {
          return(
            <div className="box d_flex top" key={index}>
              <div className="left">
               <h1> {value.title}</h1>

              </div>
           </div>



          )


        })}
        
        
      </>
    )
}

export default SlideCard