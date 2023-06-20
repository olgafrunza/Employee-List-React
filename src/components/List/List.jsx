const List = ({ people }) => {
  console.log(people);
  return (
    <div>
      {people.map(person => {
        const { id, image, name, email, age } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{email}</p>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
