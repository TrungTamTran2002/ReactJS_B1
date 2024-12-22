import Card from './card'
export default function ListCard() {
  return (
    <div className='grid grid-cols-4 container mx-auto gap-4'>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}
