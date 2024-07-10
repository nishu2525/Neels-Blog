import { Card } from "flowbite-react";


export default function Blog_card() {
  return (
    <Card
      className="max-w-sm mt-4"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc="https://st2.depositphotos.com/2769299/7314/i/450/depositphotos_73146775-stock-photo-a-stack-of-books-on.jpg"
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Neel&apos;s Blog of the year 2024 is here for you 
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo fugiat eveniet dolorem animi ipsa saepe?
      </p>
    </Card>
  )
}
