

const adviceGenerator = ()=> {
    const advice_id = document.querySelector("strong");
    const Qoute = document.querySelector("q");
    const Btn = document.querySelector(".round-div");
    const api = "https://api.adviceslip.com/advice";
        const getAdvice = async ()=> {
            
            try {

                const res = await fetch(api);
                const data = await res.json()
                console.log(data)

                const { id, advice} = data.slip;

                advice_id.textContent = `Advice # ${id}`;
                Qoute.textContent= advice;

            
            }
            catch(error) {
                console.log(error)
            }
            
        }

            Btn.addEventListener( "click", ()=> {
                setTimeout(() => {
                    getAdvice()
                    
                }, 2000);
            })
        

}

adviceGenerator()