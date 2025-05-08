function convertCurrency()
{
 amount=parseFloat(document.getElementById('amount').value);
 fromcurr=document.getElementById('fromcurr').value;
 tocurr=document.getElementById('tocurr').value;
 result=document.getElementById('result');

 result.textContent="fetching exchange rate..";

 const API_KEY='4cadc27517e6f908354f9193';
 const URL=`https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${fromcurr}/${tocurr}/${amount}`;


 fetch(URL)
  .then(response=>{

    if(!response.ok)
    {
     throw new Error("Response not fetched");
    }
    return response.json();

})

.then(data=>{
    if(data.result==='success')
    {
     const convertedcurr=data.conversion_result;
     const rate=data.conversion_rate;

     result.textContent = `${amount} ${fromcurr} = ${convertedcurr.toFixed(2)} ${tocurr}`;
     document.getElementById('rate').textContent = `1 ${fromcurr} = ${rate} ${tocurr}`;
    }
    else
    {
     result.textContent="conversion failed.try again";
    }
   })

.catch(error=>{
    result.textContent='Error :Failed to convert..';
    console.error('Error :',error);
})

}



document.getElementById('cnvt-btn').addEventListener('click', convertCurrency);