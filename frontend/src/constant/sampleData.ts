import { CategoryCompInterface } from "../components/CategoryComp/CategoryComp";
import { SingleCartInterface } from "../components/SingleCart/SingleCart";
import { ArrivalWidgetInterface, NewArrivalWidgetInterface } from "../widgets/NewArrivalWidget/NewArrivalWidget";

export const sampleCartData: SingleCartInterface[] = [
    {
      img: "/product1.png",
      title: "Wireless Headphones",
      price: 150,
      discountPrice: 120,
      rating: 4.5,
      ratingCount: 250,
      wishlist: true,
      tag: "Hot Deal",
      tagColor: "red",
    },
    {
      img: "/product1.png",
      title: "Smart Watch",
      price: 200,
      discountPrice: false, // No discount available
      rating: 4.2,
      ratingCount: 300,
      wishlist: false,
      tag: "New Arrival",
      tagColor: "green",
    },
    {
      img: "/product1.png",
      title: "Gaming Laptop",
      price: 1200,
      discountPrice: 1000,
      rating: 4.8,
      ratingCount: 150,
      wishlist: true,
      tag: "Best Seller",
      tagColor: "blue",
    },
    {
      img: "/product1.png",
      title: "Bluetooth Speaker",
      price: 80,
      discountPrice: 60,
      rating: 4.6,
      ratingCount: 400,
      wishlist: false,
      tag: "Limited Offer",
      tagColor: "orange",
    },
    {
      img: "/product1.png",
      title: "Portable Charger",
      price: 50,
      discountPrice: 45,
      rating: 4.3,
      ratingCount: 120,
      wishlist: true,
      tag: "Eco-Friendly",
      tagColor: "green",
    },
    {
        img: "/product1.png",
        title: "Smart Watch",
        price: 200,
        discountPrice: false, // No discount available
        rating: 4.2,
        ratingCount: 300,
        wishlist: false,
        tag: "New Arrival",
        tagColor: "green",
      },
      {
        img: "/product1.png",
        title: "Gaming Laptop",
        price: 1200,
        discountPrice: 1000,
        rating: 4.8,
        ratingCount: 150,
        wishlist: true,
        tag: "Best Seller",
        tagColor: "blue",
      },
      {
        img: "/product1.png",
        title: "Bluetooth Speaker",
        price: 80,
        discountPrice: 60,
        rating: 4.6,
        ratingCount: 400,
        wishlist: false,
        tag: "Limited Offer",
        tagColor: "orange",
      },
      {
        img: "/product1.png",
        title: "Portable Charger",
        price: 50,
        discountPrice: 45,
        rating: 4.3,
        ratingCount: 120,
        wishlist: true,
        tag: "Eco-Friendly",
        tagColor: "green",
      },
  ];

  export const sampleCategoryData: CategoryCompInterface[]= [
    {
      categoryName:"Phones",
      imgUrl:"/Category-CellPhone.png"
    },
    {
      categoryName:"Computers",
      imgUrl:"/Category-Computer.png"
    },
    {
      categoryName:"SmartWatch",
      imgUrl:"/Category-SmartWatch.png"
    },
    {
      categoryName:"Camera",
      imgUrl:"/Category-Camera.png"
    },
    {
      categoryName:"HeadPhones",
      imgUrl:"/Category-Headphone.png"
    },
    {
      categoryName:"Gaming",
      imgUrl:"/Category-Gamepad.png"
    },
  ]

  

  export const sampleNewArrivalData: ArrivalWidgetInterface = {
    firstItem: {
      description: "Sample 1 Arrival",
      imgUrl:"/arrival1.png",
      shopNowLink:"/",
      title:"Sample 1 Arrival"
    },
    fourthItem: {
      description: "Sample 4 Arrival",
      imgUrl:"/arrival4.png",
      shopNowLink:"/",
      title:"Sample 4 Arrival"
    },
    secondItem:{
      description: "Sample 2 Arrival",
      imgUrl:"/arrival2.png",
      shopNowLink:"/",
      title:"Sample 2 Arrival"
    },
    thirdItem:{
      description: "Sample 3 Arrival",
      imgUrl:"/arrival3.png",
      shopNowLink:"/",
      title:"Sample 3 Arrival"
    },
  }