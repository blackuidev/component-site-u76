import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const playlists = [
  {
    id: '1', title: 'My Favorites', imageUrl: 'https://images.unsplash.com/photo-1549692520-e1bb6a83eeca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bXVzaWMlMjBiYW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: '2', title: 'Chill Vibes', imageUrl: 'https://images.unsplash.com/photo-1510915228340-29c85a3a580b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG11c2ljJTIwYmFuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: '3', title: 'Workout Beats', imageUrl: 'https://images.unsplash.com/photo-1494630245358-441e2e82c473?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG11c2ljJTIwYmFuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: '4', title: 'Focus Flow', imageUrl: 'https://images.unsplash.com/photo-1531710202285-43d7e489ea40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG11c2ljJTIwYmFuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
  },
];

const recommendedSongs = [
  {
    id: '101', title: 'Sunset Serenade', artist: 'Zara Larsson', imageUrl: 'https://images.unsplash.com/photo-1614680366346-7e1e41899856?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c29uZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: '102', title: 'Midnight Drive', artist: 'The Weeknd', imageUrl: 'https://images.unsplash.com/photo-1508700982643-a3b3e0909f96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c29uZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
  },
];

const Home: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black min-h-screen text-white">
      <div className="container mx-auto py-12 px-6">
        <h1 className="text-3xl font-bold mb-6">Good Evening</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Playlists</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {playlists.map((playlist) => (
              <Card key={playlist.id} className="bg-white/5 backdrop-blur-md border-white/10 hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white font-semibold">{playlist.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <img src={playlist.imageUrl} alt={playlist.title} className="rounded-md w-full aspect-square object-cover" />
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Recommended for you</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recommendedSongs.map((song) => (
              <Card key={song.id} className="bg-white/5 backdrop-blur-md border-white/10 hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white font-semibold">{song.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">{song.artist}</CardDescription>
                </CardHeader>
                <CardContent>
                  <img src={song.imageUrl} alt={song.title} className="rounded-md w-full aspect-square object-cover" />
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Play</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;