import { useState } from "react";

export default function UseUsers() {



    const userData = [
        {
            name: "Caleb Stracke",
            avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1074.jpg",
            tweet: [
                { 
                    id: 1, 
                    content: "Tajribalar o'sish uchun zarur.", 
                    createdAt: "2024-08-15T20:00:00Z", 
                    views: 260, 
                    likes: 55, 
                    retweets: 10, 
                    comments: 6 
                },
                { 
                    id: 2, 
                    content: "Qiyinchiliklarga qarshi kurashish uchun kuchli bo'lish kerak.", 
                    createdAt: "2024-08-15T21:00:00Z", 
                    views: 230, 
                    likes: 50, 
                    retweets: 8, 
                    comments: 5 
                }
            ],
            userName: "Kip.Simonis99",
            location: "North Horace",
            joinedDate: "Joined January 2024",
            password: "bVjrGqTUiOENbjF",
            job: "Software Engineer",
            birthDate: "Born April 10, 2005",
            followers: 1200,
            following: 350,
            telegram: "t.me/caleb_stracke",
            id: 1
        },
        {
            name: "Dr. Merle Boyer",
            avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/27.jpg",
            tweet: [
                { 
                    id: 1, 
                    content: "O'zbek taomlari dunyodagi eng mazali taomlar qatorida.", 
                    createdAt: "2024-08-15T10:00:00Z", 
                    views: 560, 
                    likes: 120, 
                    retweets: 25, 
                    comments: 15 
                },
                { 
                    id: 2, 
                    content: "Kechagi kitob o'qish seansi juda foydali bo'ldi.", 
                    createdAt: "2024-08-15T11:00:00Z", 
                    views: 410, 
                    likes: 95, 
                    retweets: 20, 
                    comments: 10 
                }
            ],
            userName: "Kacie_Harvey",
            location: "Lake Cleora",
            joinedDate: "Joined March 2024",
            password: "Nuewbo99HdPWJxZ",
            job: "Data Scientist",
            birthDate: "Born July 22, 2007",
            followers: 1500,
            following: 400,
            telegram: "t.me/dr_merle_boyer",
            id: 2
        },
        {
            name: "Christian Wyman",
            avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/84.jpg",
            tweet: [
                { 
                    id: 1, 
                    content: "Sifatli ta'lim hayotimizni yaxshilaydi.", 
                    createdAt: "2024-08-15T12:00:00Z", 
                    views: 400, 
                    likes: 85, 
                    retweets: 18, 
                    comments: 12 
                },
                { 
                    id: 2, 
                    content: "Har doim o'z ustida ishlash kerak.", 
                    createdAt: "2024-08-15T13:00:00Z", 
                    views: 350, 
                    likes: 80, 
                    retweets: 15, 
                    comments: 10 
                }
            ],
            userName: "Zelda86",
            location: "Port Deion",
            joinedDate: "Joined June 2024",
            password: "jueT0IhzfETHk7c",
            job: "Marketing Manager",
            birthDate: "Born February 5, 2006",
            followers: 1700,
            following: 420,
            telegram: "t.me/christian_wyman",
            id: 3
        },
        {
            name: "Jermaine Bogisich",
            avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1166.jpg",
            tweet: [
                { 
                    id: 1, 
                    content: "Sog'lom turmush tarzini saqlash juda muhim.", 
                    createdAt: "2024-08-15T14:00:00Z", 
                    views: 300, 
                    likes: 65, 
                    retweets: 12, 
                    comments: 8 
                },
                { 
                    id: 2, 
                    content: "Dostlar bilan vaqt o'tkazish eng yaxshi vaqt o'tkazishdir.", 
                    createdAt: "2024-08-15T15:00:00Z", 
                    views: 280, 
                    likes: 60, 
                    retweets: 10, 
                    comments: 7 
                }
            ],
            userName: "Lenora58",
            location: "North Vladimir",
            joinedDate: "Joined February 2024",
            password: "9LmdjVAgtCyiXhM",
            job: "Sales Manager",
            birthDate: "Born December 10, 2008",
            followers: 1300,
            following: 330,
            telegram: "t.me/jermaine_bogisich",
            id: 4
        },
        {
            name: "Miss Warren Marks",
            avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/187.jpg",
            tweet: [
                { 
                    id: 1, 
                    content: "Har bir kun yangi imkoniyatlarga to'la.", 
                    createdAt: "2024-08-15T16:00:00Z", 
                    views: 350, 
                    likes: 70, 
                    retweets: 14, 
                    comments: 9 
                },
                { 
                    id: 2, 
                    content: "O'zgarishlarga ochiq bo'lish kerak.", 
                    createdAt: "2024-08-15T17:00:00Z", 
                    views: 320, 
                    likes: 65, 
                    retweets: 12, 
                    comments: 8 
                }
            ],
            userName: "Britney92",
            location: "East Erynstad",
            joinedDate: "Joined July 2024",
            password: "zlZK_MDfMELyHms",
            job: "Event Planner",
            birthDate: "Born November 24, 2006",
            followers: 1100,
            following: 320,
            telegram: "t.me/miss_warren_marks",
            id: 5
        },
        {
            name: "Spencer Gusikowski",
            avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/974.jpg",
            tweet: [
                { 
                    id: 1, 
                    content: "Kreativlik har doim kerak.", 
                    createdAt: "2024-08-15T09:00:00Z", 
                    views: 270, 
                    likes: 50, 
                    retweets: 10, 
                    comments: 5 
                },
                { 
                    id: 2, 
                    content: "Hayotda muvaffaqiyatlar orttirish uchun maqsadlar qo'yish zarur.", 
                    createdAt: "2024-08-15T10:00:00Z", 
                    views: 250, 
                    likes: 45, 
                    retweets: 8, 
                    comments: 4 
                }
            ],
            userName: "Lavern_Block41",
            location: "East Leonor",
            joinedDate: "Joined October 2024",
            password: "6w7aQbUMySrWwm1",
            job: "Product Manager",
            birthDate: "Born July 7, 2007",
            followers: 800,
            following: 290,
            telegram: "t.me/spencer_gusikowski",
            id: 6
        },
        {
            name: "Jeannie Osinski II",
            avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1074.jpg",
            tweet: [
                { 
                    id: 1, 
                    content: "Yaxshi kutubxona bilimlarning manbai.", 
                    createdAt: "2024-08-15T20:30:00Z", 
                    views: 290, 
                    likes: 70, 
                    retweets: 20, 
                    comments: 12 
                },
                { 
                    id: 2, 
                    content: "Yaxshi kutubxona bilimlarning manbai.", 
                    createdAt: "2024-08-15T20:30:00Z", 
                    views: 290, 
                    likes: 70, 
                    retweets: 20, 
                    comments: 12 
                }
            ],
            userName: "Myron32",
            location: "Watsicafort",
            joinedDate: "Joined November 2024",
            password: "gzeEdwia5UqDZAT",
            job: "UI/UX Designer",
            birthDate: "Born May 5, 2009",
            followers: 1400,
            following: 360,
            telegram: "t.me/jeannie_osinski",
            id: 7
        },
        {
            name: "Mrs. Lora Fay",
            avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/359.jpg",
            tweet: [
                { 
                    id: 1, 
                    content: "Dostlar va oila bilan vaqt o'tkazish juda qadrli.", 
                    createdAt: "2024-08-15T18:00:00Z", 
                    views: 330, 
                    likes: 60, 
                    retweets: 12, 
                    comments: 7 
                },
                { 
                    id: 2, 
                    content: "O'z-o'zini rivojlantirish uchun har kuni yangi maqsadlar qo'yish kerak.", 
                    createdAt: "2024-08-15T19:00:00Z", 
                    views: 310, 
                    likes: 55, 
                    retweets: 10, 
                    comments: 6 
                }
            ],
            userName: "Rickie_Hilpert94",
            location: "East Coreneboro",
            joinedDate: "Joined August 2024",
            password: "xH07OBQiNGaG9iZ",
            job: "Graphic Designer",
            birthDate: "Born October 30, 2006",
            followers: 950,
            following: 280,
            telegram: "t.me/mrs_lora_fay",
            id: 8
        },
        {
            name: "Lance Champlin Jr.",
            avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1009.jpg",
            tweet: [
                { 
                    id: 1, 
                    content: "Har doim yangi tajribalar izlang.", 
                    createdAt: "2024-08-15T21:00:00Z", 
                    views: 290, 
                    likes: 65, 
                    retweets: 15, 
                    comments: 8 
                },
                { 
                    id: 2, 
                    content: "Yaxshi muhit yaratilsa, yaxshi natijalar qo'lga kiritiladi.", 
                    createdAt: "2024-08-15T22:00:00Z", 
                    views: 270, 
                    likes: 60, 
                    retweets: 12, 
                    comments: 7 
                }
            ],
            userName: "Andy_Nienow35",
            location: "Lexiestad",
            joinedDate: "Joined September 2024",
            password: "K36t8sOBr4ClWMw",
            job: "Business Analyst",
            birthDate: "Born January 18, 2008",
            followers: 1150,
            following: 310,
            telegram: "t.me/lance_champlin_jr",
            id: 9
        },
        {
            name: "Caleb Goodwin",
            avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1201.jpg",
            tweet: [
                { 
                    id: 1, 
                    content: "Yangi tajribalarni hayotga olib keladi.", 
                    createdAt: "2024-08-15T23:00:00Z", 
                    views: 320, 
                    likes: 70, 
                    retweets: 16, 
                    comments: 9 
                },
                { 
                    id: 2, 
                    content: "Katta maqsadlar katta muvaffaqiyatlarga olib keladi.", 
                    createdAt: "2024-08-15T23:30:00Z", 
                    views: 300, 
                    likes: 65, 
                    retweets: 14, 
                    comments: 8 
                }
            ],
            userName: "Santa.Stoltenberg",
            location: "Kimchester",
            joinedDate: "Joined April 2024",
            password: "W7Ri5DNQSMi5uBy",
            job: "Content Creator",
            birthDate: "Born August 29, 2007",
            followers: 950,
            following: 270,
            telegram: "t.me/caleb_goodwin",
            id: 10
        }
    ];
    





    return {  userData }
}