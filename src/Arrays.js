//Arrays en React
export const Arrays = () => {
  const user = [
    {
      id: 1,
      name: 'Gabriel Mauricio Vega Balcazar',
      image: 'https://robohash.org/user2',
    },
    {
      id: 2,
      name: 'Eduardo Miguel Vega Balcazar',
      image: 'https://robohash.org/user2',
    },
  ];

  return (
    <div>
      {user.map((user,i) => {
        return (
          <div key={i}>
            <h1>{user.name}</h1>
            <img src={user.image} />
          </div>
        );
      })}
    </div>
  );
};
