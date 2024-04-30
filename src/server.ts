import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

const PORT = 9999;

const images = [
  { id: 0, src: 'https://winghamwildlifepark.co.uk/wp-content/uploads/2013/04/Panda-200-300x300.jpg' },
  { id: 1, src: 'https://cdn.firstcry.com/education/2022/11/26141737/Animal-Name-Starting-With-L-For-Kids.jpg' },
  {
      id: 2, src: 'https://foothillsanimalshelter.org/wp-content/uploads/2024/04/Screenshot-2024-04-09-at-3.30.02-PM-300x300.png',
  },
  { id: 3, src: 'https://lafeber.com/pet-birds/wp-content/uploads/2018/06/Zebra-Finch-300x300.jpg' },
  {
      id: 4, src: 'https://2.bp.blogspot.com/-WPfHNmLnIyM/VbHUfJl9Q7I/AAAAAAAAB-U/2ToZPKOd4t4/s1600/baby-animals-hd-wallpapers-dowload.jpg',
  },
  { id: 5, src: 'https://www.mammal.org.uk/wp-content/uploads/2021/09/red-fox-300x300.jpg' },
  { id: 6, src: 'https://www.allthebestpetcare.com/wp-content/uploads/2021/10/cbd-oil-cat-anxiety-300x300.jpg' },
  { id: 7, src: 'https://fairtradesafaris.com/wp-content/uploads/2021/04/1044927_FTS-15birds-5_042121-300x300.png' },
  { id: 8, src: 'https://petkingdom.org/wp-content/uploads/2024/04/F-Cavpo-176-300x300.jpg' },
  { id: 9, src: 'https://www.animalkingdomaz.com/wp-content/uploads/adult-pomsky-1-300x300.jpg' },
  { id: 10, src: 'https://winghamwildlifepark.co.uk/wp-content/uploads/2013/04/Panda-200-300x300.jpg' },
  { id: 11, src: 'https://i.pinimg.com/400x300/07/a5/86/07a586a38cd7df6f2b1187e6d5aa63ff.jpg' },
  {
      id: 12, src: 'https://foothillsanimalshelter.org/wp-content/uploads/2024/04/Screenshot-2024-04-09-at-3.30.02-PM-300x300.png',
  },
  { id: 13, src: 'https://lafeber.com/pet-birds/wp-content/uploads/2018/06/Zebra-Finch-300x300.jpg' },
  { id: 14, src: 'https://www.mammal.org.uk/wp-content/uploads/2021/12/Untitled-design4-300x300.jpg' },
  { id: 15, src: 'https://www.mammal.org.uk/wp-content/uploads/2021/09/red-fox-300x300.jpg' },
  { id: 16, src: 'https://www.allthebestpetcare.com/wp-content/uploads/2021/10/cbd-oil-cat-anxiety-300x300.jpg' },
  { id: 17, src: 'https://fairtradesafaris.com/wp-content/uploads/2021/04/1044927_FTS-15birds-5_042121-300x300.png' },
  { id: 18, src: 'https://petkingdom.org/wp-content/uploads/2024/04/F-Cavpo-176-300x300.jpg' },
  { id: 19, src: 'https://www.animalkingdomaz.com/wp-content/uploads/adult-pomsky-1-300x300.jpg' },
  { id: 20, src: 'https://winghamwildlifepark.co.uk/wp-content/uploads/2013/04/Panda-200-300x300.jpg' },
  { id: 21, src: 'https://i.pinimg.com/400x300/07/a5/86/07a586a38cd7df6f2b1187e6d5aa63ff.jpg' },
  {
      id: 22, src: 'https://foothillsanimalshelter.org/wp-content/uploads/2024/04/Screenshot-2024-04-09-at-3.30.02-PM-300x300.png',
  },
  { id: 23, src: 'https://lafeber.com/pet-birds/wp-content/uploads/2018/06/Zebra-Finch-300x300.jpg' },
  { id: 24, src: 'https://www.mammal.org.uk/wp-content/uploads/2021/12/Untitled-design4-300x300.jpg' },
  { id: 25, src: 'https://www.mammal.org.uk/wp-content/uploads/2021/09/red-fox-300x300.jpg' },
  { id: 26, src: 'https://www.allthebestpetcare.com/wp-content/uploads/2021/10/cbd-oil-cat-anxiety-300x300.jpg' },
  { id: 27, src: 'https://fairtradesafaris.com/wp-content/uploads/2021/04/1044927_FTS-15birds-5_042121-300x300.png' },
  { id: 28, src: 'https://petkingdom.org/wp-content/uploads/2024/04/F-Cavpo-176-300x300.jpg' },
  { id: 29, src: 'https://www.animalkingdomaz.com/wp-content/uploads/adult-pomsky-1-300x300.jpg' },
  { id: 30, src: 'https://i.pinimg.com/400x300/07/a5/86/07a586a38cd7df6f2b1187e6d5aa63ff.jpg' },
];

// get all images
app.get('/api/images', (req: Request, res: Response) => {
  res.json(images);
});

// get a single image
app.get('/api/images/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const image = images.find(img => img.id.toString() === id);
  
  if (image) {
    res.json(image);
  } else {
    res.status(404).send('Image not found');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});