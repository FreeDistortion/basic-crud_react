import React from 'react';

const FetchExam = () => {
    const getDB = async () => { 
        
        const url = "https://apis.data.go.kr/3450000/disabilityAllowanceService/getDisabilityAllowance"
        const serviceKey = "smVUspJdbxLADZAauF6sIMAhdGgYQSefbcN0kVLL9r6RsmWmxyS7MEaUdTxeZLGwVy1gWRxZSbWY1lOwV%2BrEEg%3D%3D"
    
        let jsonResponse = (await fetch(
            url
            +"?serviceKey="+serviceKey
            +"&currentPage="+1
            +"&perPage="+10)).json();
        console.log(jsonResponse)
     }

getDB()
    return (
        <div>
            
        </div>
    );
};


export default FetchExam;