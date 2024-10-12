import React from 'react'
import TotalInvested from "../assets/svg/investedAmount.svg"
import NoOfInvestment from "../assets/svg/no-ofInvestment.svg"
import Return from "../assets/svg/rateOfReturn.svg"
import ShortCards from '../components/cards/ShortCards'


const investmentCategrories = [
  {
    id: 1,
    url: TotalInvested,
    title: "Invested Amount",
    amount: 150000,
  },
  {
    id: 1,
    url: NoOfInvestment,
    title: "Number of Investments",
    amount: 1250,
  },
  {
    id: 1,
    url: Return,
    title: "Rate of Return",
    amount: "+5.80%",
  }
]

const Investments = () => {
  return (
    <div>
      <div className='grid grid-cols-3 gap-5'>
        {investmentCategrories.map((category) => (
          <ShortCards
          key={category.id}
          title={category.title}
          url={category.url}
          amount={category.amount.toLocaleString()}
          />
        ))}
      </div>
      
    </div>
  )
}

export default Investments
