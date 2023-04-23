// Dependences
import { FC } from 'react'
import Card from './Card';

// Components

const FeatureCards: FC = () => {
  return (
    <div className='container'>
      <div className='featureCards'>
        <Card icon="fas fa-shield-check" classes="text-info-500" title="Guarantee" content="24 Months" />
        <Card icon="fas fa-credit-card" classes="text-warning-600" title="Rate Paying" content="4 - 12 Months" />
        <Card icon="fas fa-shield-keyhole" classes="text-primary-600" title="Payments" content="Secured" />
        <Card icon="fas fa-truck" classes="text-success-600" title="Free Delivery" content="from $100" />
        <Card icon="fas fa-tag" classes="text-danger-700" title="Brands" content="Only Top" />
      </div>
    </div> 
  )
}

export default FeatureCards;
