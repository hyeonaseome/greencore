import type { NextApiRequest, NextApiResponse } from 'next';

export type Data = {
  result: string;
  data: Object | string | null;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === 'POST') {
    res.status(200).json({ result: 'SUCCESS', data: { diaryId: 0 } });
  } else if (req.method === 'GET') {
    res.status(200).json({
      result: 'SUCCESS',
      data: [
        {
          diarySetId: 1,
          startDate: '2023-03-17',
          imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz_EQhEVTgEq6BmWQKVBwdQEOiDCDVLLjUhw&usqp=CAU',
          title: '좀만 더 크면 먹힐 대파',
        },
        {
          diarySetId: 2,
          startDate: '2023-02-17',
          imagePath:
            'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgVFRYYGBgYGBgYGBgYGBgYFRoYGRgaGRgYGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHBISHjQhISE0MTQ0NDQ0NDQ0NDQ0NDQxNDQ0NDQ0NDQ0NDQ0MTQ0NDQxNDQ0NDQ0NDQ0MTQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAABAAIDBAUGB//EADwQAAIBAgQDBQYDBgcBAQAAAAECAAMRBBIhMQVBUWFxgZGhBiJSsdHwEzLBQkNicpLhFVOCosLS8TMU/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QAIxEBAQACAQQDAQADAAAAAAAAAAECEQMSITFRBCJBE2Fxkf/aAAwDAQACEQMRAD8A5kOeyLO3X5RtjHifKfVDMesAY9Y4wXgKOAjfGPUX2gtMV/fyje3Pbvk1oEp2BYi19B1Pb3QgRkmPfuVo7SJVhyTLYi0ItAF7I8IYCvClossfk5QGrHExwTwjhT6wI1JhkmXvgCdkCJj2ReElYeEWUyCICHNHEW39I20AK0Oa8QEFoEpJ5RmsFzECZA1hEIcxEYXjQdb71hkeYxS6FHNFmMWSLJ93m2SZ9IAIikKpBo4SakDcFTYix0t1APzjAsucPpZmItrp84nlMvB/EnQEIpvlJLNqCxNvlaUw0s46xqOf4iNuht+khVB0ktaxmoQqR4qCNy9kNuyRRFSOFTvgAjlgI1u+H8fvhJgKwF+Me2L8UxAR2WBGXMX4hj8sFhAaahjDVPbJCBBlE0IzUMBYyXLCR2wmkGY9JIjdRHZYhJVPIHSMYSTzjG35zIaAekFj2yTxiHfAhs0Un8Yo2KFvvWOyxge8SuJtkWWARrPG5pNG0wEucOezi25GngRM8VJo8Hy5wxI0sNTbe/0lkTLwgh17JGzkGx0hDyaa2kF+yOBgRo8OJFDL2RW7I68ReA373McIjUiD32gG/fDeMzRCBL4RrAwq8cGgRwkRNCohDSt9Re21+0dohCdTGM7q6hbWY3a9xoouSLc7S6xDKLa20J57kAehlvZZ3isEA5+sOURwit3SBuUQMnZHle6MMAAQ5TGk9ggLQH5YpHnPQ+UMaptlsIRc8vOImIGaYJkiyabRExZpYAO6WcNhydb21Xz+zKqjWX8A3LtB8iPpJldQk2ZiqVm8AfSRos1OKUPdRxzuD53H6+UzVp9b+ckvZZBVTHAGELbnH2lXRAGLKTHKI8D/ANmVR5I8JH8o1R3Sgqg7TCUHd06xK8feTSK7rbthR4ahBEgJ13mpEq2vdHGR03HMj9ZMq32BMl7G4jordxcgAXJv0t9iWGqJZlUfmIPkdB6yi/D6z31Vbm9gSTYbAm3LU+MK4Kqm4La9Lm8l7+KuOWP7UubpHQKhZrWIY7rbUns6y0MBU5I/9DfSWTfhLdKWaALrLv8Ah9X/AC38Ef6RHh9X/Lqf0N9JrpvpOqKO8VpNax1v3HeMYSaXaLLDHZhFBtllDCEMaNpItrHWVHUcA9mErU1qVGcZi1lUqBYErc3BPIzVPsbhutT+tf8ArNrhuG/DpInwooPeAL+t5JUn0ceLGSbj5+XLlbdVz59i8MdmqjudP1SYvG+Cph6qLTZyrLmYuVJvmIAFlGk6riPElooXYEn9lRux/QdTOUVa9d873JOm1go5KoOwFzPP8i8eOOpO7twZZXLeV7CzqyFHW66W11v3+M2eE+z2FrrcNWVhbMpZLi+xByaiU6WAcHa47x1mphS1Nw6i5GhGbdTuL+XjaeTi5MMcvt3jtyZbn1uqsL7F4b46p/1J/wBJIvsdhh8Z73+gm3hsSri6nvB/MO8SafTx4+OzckrxXkz91ip7KYUfsMe93+slT2Zwo/dX73c/8priECX+ePqJ/TL3Wans/hh+5T/cfmY9eBYYfuE/pmiIpejH1Dry91SHBsMP3NP+hfpD/hmHH7ml/Qn0lh3lZ6pl6Z6Tqy9mVcLRG1KmP9CfSZHEsbRojMyoPhVVXMx6ASbi2PFJC7anZV6np3Tg3d6rl3N2PkB0A5Cefn5pxzU8rju+WxX4vVr3UWpp8KaEj+Jtz3CwjQioBoTfQKN2PID5k7R2CoW0mglEXBtqL2PS9r/IeU+Nyc1yy3e7VqomcAt+ESPhVlL6anQ2HkZpYKmKiBipXMAbMLMt1F1YciLkSzSo2AlgLZZMcu3hN1mY6mirmKlj7tgou2ckBbbWNyNbi1rzUwHGGFkqhh0c2vp8ViQe/fs5ys6bR34d9DY8x3zpw/JuF7LvfaujVu2K8w+H4vIcrH3Cef7J693Xzm5PtcPLjyY7jnezg/bjChayuBbOmvK7KbE99ss5kzt/b2ldKT9GZf6gD/wnFaCeXmms69/Dd4wzLFDcdIpxdWUhtzlnAUc9RE+J0XwLAH0lAfe82PZYZsTT/hzN/SpI9bTeGO8pHPPLWNr1B3nP47jy3y07Mebn8nh8Xft3zO43xRqjGkhsg0dh+0eaj+H5929TDYedPkfKuP1x/wCvBJpoU7uczMSeZ/T+0sLG4ely++yXFw9vQT5OeWeXdrdRq3L75R6078/vpHGjz7YwvqUUrn3F9ct+ZA1Pd2zj3tTqpAMpDKSCNiN/7jsmxgOKhiEewbk37LfQ+kprTJANt+y2vORVKH30M9HD8nPhv+PRXUKIQJlcKxh/I+42P6TXE+7w8uPLjLGQjHaPaQVTOyIKryBmkWJxIXUzmsfxsl1Rf2mA8zrM5ZSRUPHcQalT+FdFHzPif0kOCw0jqG7GaeCXafK5fvd1v8WaOGsJaSkdbeEmpAS7TQaTz3g3RVpOF0f3T11yHuY6eB1+c0Uw11HdJEUEWMVLDZfyEqPhFsngp0HhaevDgxTaHEYW1uukqqwLWAJ7Rt57TTelci9z37eW0jSnrOWfBJl2Iz8Rh9L27xNLh9XMgB3X3T4bHy+UTJI8ELOw6i/kR/2nf4+Nwz7eKXwo+19HNhmPwMjeuX/lOAyjpPUOK0s9GovVGt3gXHqBPNJ1+RPtK9Px79bEP4XZFJr93pFPO9DjWeafs9iMju4PvZCi9QXZbkdyhvSY15p8FF28beX/ALOs7d3DO9nS4SltNTDr9PrK2GGnrL+GXbznizx7vNUooh7AqG1uL7AjY98tYOkb3zErewFyRcHU6k90OEXaXaNMCwA0G0THeOk0OS+YDe/6CSjCKSrEWO1xofOWaNgwNr3FvnrJWRh7w5EGxFx18JvD4/7Q1MNYW3567yviaHPzlupiMv5xl7d18+Q77QVRcTXLw43G6VkumgI3E2cBiM6A8xof0MzXTU93ykvBdGcctPQ/3k+FlceTp/KlarSni3sJdaZnEDoZ9hhxnHuIkXAM5zBufxUJ+MeptLnG75zM1GykN0IPkbzz53bcb1UWMv4SptK+JS9iOf2JHRaxngyl2rpKVWX6D3mBh623dNKlUtEy0NdHk6VJlrWlmm+k645ppfFWMkSvEXm7ls0e7SPC/nJ6LbzI+kiapLODSy3P7Rv4cvr4zfDOrKX0XtFmeZYmlkdk+FmXyNp6VOL9paGWux5OA3pY+qmdfkY7xldeDLWVjFt96wx1x1inj09e3AOJocHa2/Pb5fpMquwmjhXypTP83qxM7dO8a8+d/HYYOt7vhNXDPp4Tl8BieXhNrB1p5csXHTocI20vB7TFwlWalKpLh4RfoL+0Sb+gHICWS51lVHkmadt9k0lU6axrtI1fSMapOeV7KjqHaWOFJq57h9+UpZrkDvM18FTyp36/SX4mG8+r0mVSsZRxqXEvtKtZZ9RhwPHMHuZzLLaek8QwoN5x/FeGlTcCcM8P1rGpsBWz0h1X3T4bekkAmPw7Ffhv735To3Z0PhOjamDqNjrpPLli3uaQ0zYzRpVZRyyVJwyxRpUalzLyVJlYeXKbRMaNJXiLyuhvLVCiWOniek74YXLwmyoUs512G/0mjAiBRYRXnt48JjGbdkZz/tVSOVHHIlTpfcXHyPnN+UOMUc9FxzAzD/Tr8gfOXOdWNjXHdZSuJ17fJYY/L3+cU8XS9vU8trd03K2FKqq9FUeIGszcNRz1ET4nUHuvr6XnVYinrrPRxzceblurGLhnKzawuK9fnKb4XW6+XKS0aYOmx6fScs+H0x1Sugw2K1HbNajidAZy9EEbzRw1Qzh0XFXT0q15ZV9JhYaqZpUasqLytoYx2lcVxrJcMpc6aDrJMLl2iVYwVDM1+Q3+k1pHSQKLCSXnv4uOYY6YpGRusfeAzqM/EUrzMxGHB0InQOkqVsPeNDhuK8E3ZJmYDiJpHI/5eXVf7Tt8cmUGcJjMM1R3KDacM8Z+N4323S4Oo15i3zgXFKNzbvnP4jhtYBVR3UhToCdWayIq9hZreBlbHU6y4oUEdyqAIxubM+7GxvqLi/8AKZ57h+uuOMrtqFYEaG8u0UJ2mFwbhOJf8jquwJZRbc7Ec9LW7p32Cwa07gXO3vMbsfoJcOO5f6Zzkx/VXC4E/tafP+00lUAWAtExgvPZjhMZ2cbdnXgIgiLTQVoCl9DziBjrwON/w+KdT/8AmWGY6I6ddeHezdDNiF/hDt/tt82E6fFYc7yh7EYW7VHPIKgPeczfJfOdU+FvJxT6nLfs5nLCEB3E3KvDuyVTgiOU3pz2rUqfbJgVXe/gCZKmHMnWgekxlx40mVVW4pSQ2YsDYnVG1A8NZL/jdMC4blvyt9iZHGMCztcXsu+pv18P7yGlwD3VzAkugdSCTcHcW8RPPlhd6jvj063W3Q40HNqfvsdgpGp7/CdZgscAq+4bEA9D5ETzXiFE0tEGUs9PKOeiuD26ETuqNTKQtywa9r6kEb69b+hE1wzVpySamnSUcQri4Phz8pNeYKVQLW33E2Ue4B6gGepwqW8N4wGG8B14iI2EmBUxdBWFjOUTBhGBVdGY687akTrMQLgjrp56E+soY7QgW1JuPv72mcoRTRVQ5iASouP5wDlB6gEk957Jj8Ew61UZH1c5qinYlrnN43zCdK2HCog3Ja57gDm+cxfw/wAOuUBC3ZHpsbWBY2dD3qHI7jOeWDpjktezNdVerRbdRnsd7C6v42adFVxOUW3bbvsbX8ZySKFrUqyfvGemwGv5gzJp3AX7pusp01voPlLxSya9HJq3ftdTGC9mGU9eX9pYDa28ZjPUUKcwOe+hzHLl7QZJgMQSRmOgBF+zlOrnY1YoNb9lvG8UAiOEbFAdeKNvFA859kaWXDA/GzP4XyD0X1m8gmbwpQtKmnREHjlF/WaSyYzWMi5XdtWEAkn4SnlIkMnQzSAMKnSTLh0A2ECmSoYHL8T4biarKEQKhX3yGXrquovrprbkOmurg8MmHpopBOTNa5uRm/MoNhpz1mupkeJoBx2jb6HsmJhJbWrlbNOO4phxiGLKLH3sp5jUeBvb0kyYdybNUN9HSwFrgEMvcbqf9M2zwtwSQRqL27fvnM+rT11HvKfI7H0J85n+c3avVdaT0E0AAsAANOWmwmxgXI0O3ymPQrWI3uOydGvdY2+xOkYqQR0jWOBlDwYGOkF4G2MCtRcEknYE3PYATf0lVBnLVCNLG3YoGg7z+kbw050I+J3v/Kp1HibDxmg1NQMttOnjeQRot7X6WHlv99kxOJYUB3A0LrcHezC+veC15s18QiDM7qg6uwUX6XMiQpWIZHVlF7shB12sCNtjFhK5/gyEgIx1p1FKnkWNNsoB/kIPgZ0iAFAw3QjNbYjn6SpiUKOoC+7cEm2uqkO5/wBijxljBEliNcpGvSTGaayuz8fhSbsNeo/USphqjKdQLXHfNWnewvy08pVqURnA0GbyB7eyaZXrxSJEIGVtwQd7gryIPPY+UlkCiivFAUUV4oHFUhaw6S4rSkssoYKuIYa1dUUu35VFzz0HYJEjRuNp56boN3R1HeVIHrKNBDM0cTYUaT2DO5T3F1JDMM5Vb30UN42kVGlXqgGq5pAgXp0iM/bnq8j2Ja3xGQ4DhaHDqESkHzHMzoSSyuylmZCGY3HM66yLJGjwrib1HKOhT/62zZQbJVCDQMeRsb21BtcR2KfEM9UU3CBEVlAQM7OVY2LMSAvugWAvqdRMXghQMr0wzMbColCjRSkpNwwqVGuSVNzlVy22ms2OLYOlkeq4S4TVnV6iBVubmkrDPudN4W6lT4PiIeqy++QyU2QhHKAMhe5cDKt+08h1lnG4IPqLBuvUdDMvg+IK1XR2ILqhQVBRSo2QNmCUk94IoKWzC4uZu3lZvlUwmAVNT7zdeQ7hL4MYIbwHRwMbeG8gdeMr1QqljyHrsB52hvGugNr7Ag25G21/n4QIeH4YIvabnuub+p1k76x14GlFbGvkpu4FyiO4Fr6qpIt2ytwSgaaZHN8t/eIyuzAlnZgL3uSWvzvsOeidAe7fpMPDU6aYn8ioz2Baow/EqMGPvodTuyrrlB90DYAwnhdGNDkjIyEFyjkrZhTcI9gDmABI3AuRG0+JBXZSjtlyZ2ABRA+xZiRffYAnQ6StUrinXcMqU84uLZ6tWqpZswpqtsmozEAHVwTqYDhHbN7zrnQXp2pq5y5iAXa4UnNY228Ia02cLilfMBa6u6lcwJGV2QEjcXy3ixiXW/NdfCUOCVs+d8iKrEOHTOQ5fMze+6LnA93Uae9ptNN0zCx2MrNndVpYgaG/Y3jsfP5y7KtbCjL7o1GoHzA+clwz3QHs+WkglihEUARRRQOIQyZDKiNLCGBcUyVWlYGSI0otIZIgA2AG50FtSbk+JJMgRpKpgTUlCiwAA6AWGup0HbHVaSurI4DKwKsDsQdCIwGPUwFhcLTpiyIqX1OUAEnqx3J7TLQMhUx6mQSRwjAYbyh8UaDDAcDFG3hEAw2ghBgIi8hqYJGdXZbsn5Tc27Li9mtuL7HUSa0Si2kB1uf396DyiBBNuY/WNdSRYEjtEiwtErmvz+XWBBT4NRChShdQAAHd6gAGgADki2nSXkUAAAAAAAAaAAbADkISYJDZ0AUDYWgEMAiK8BgvAMUEUDz9GlhGlFXllHgXkeSo0qI0mQwLiNJVaVUMmUyiyrSVWlZTJFMCwDJFMroZMpgTAx0jUxwMB0MEMAxQQwCDHXjYoBEdGQwHXivGx0AwXhgkBhEaIrwCY0x0aZQrwxsUDzgS3T5RRSCdZYSKKBOskWGKUTLHrFFAlWSrFFAlWPEMUAiGKKAYoooBhEEUAxRRQFHRRSAxRRQBDFFAAiiilCiiikH/2Q==',
          title: '나쁜말 양파, 착한말 양파',
        },
      ],
    });
  }
}
