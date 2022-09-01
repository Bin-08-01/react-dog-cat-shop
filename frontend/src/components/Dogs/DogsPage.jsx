import DogCard from "./DogCard";

const DogsPage = (props) => {
    const {allDogs} = props;
    return (
        <>
            <section className="dogs-container">
                {allDogs.map((dog)=>{
                    return (
                        <div key={dog.id}>
                            <DogCard
                                id={dog.id}
                                name={dog.name}
                                breed={dog.breed}
                                price={dog.price}
                                description={dog.description}
                                imageUrl={dog.imageUrl}/>
                        </div>
                    );
                })}
            </section>
        </>
    )
}

export default DogsPage;