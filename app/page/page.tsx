import Image from 'next/image';

export default function Page() {
  const mockProducts = [
    { id: 1, name: 'Product A', price: 20.99, category: 'Electronics' },
    { id: 2, name: 'Product B', price: 34.95, category: 'Clothing' },
    { id: 3, name: 'Product C', price: 8.75, category: 'Home' },
    { id: 4, name: 'Product D', price: 49.99, category: 'Electronics' },
    { id: 5, name: 'Product E', price: 15.49, category: 'Clothing' },
    { id: 6, name: 'Product F', price: 22.0, category: 'Home' },
  ];

  return (
    <main>
      <h1>Page</h1>
      <Image src="/image.jpeg" alt="" width={700} height={700} />
      <Image src="/one.png" alt="" width={700} height={700} />
      <Image src="/two.png" alt="" width={700} height={700} />
      {mockProducts.map((product) => {
        return (
          <div key={`product-${product.id}`}>
            <h3>{product.name}</h3>
            <Image src="/one.png" alt="" width={300} height={300} />
            <p>{product.price}$</p>
            <p>{product.category}</p>
          </div>
        );
      })}
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatibus, quibusdam, quia, quos voluptatem voluptatum quod
        consequuntur voluptas quas doloribus natus. Quisquam voluptatibus,
        quibusdam, quia, quos voluptatem voluptatum quod consequuntur voluptas
        quas doloribus natus. Quisquam voluptatibus, quibusdam, quia, quos
        voluptatem voluptatum quod consequuntur voluptas quas doloribus natus.
        Quisquam voluptatibus, quibusdam, quia, quos voluptatem voluptatum quod
        consequuntur voluptas quas doloribus natus. Quisquam voluptatibus,
        quibusdam, quia, quos voluptatem voluptatum quod consequuntur voluptas
        quas doloribus natus. Quisquam voluptatibus, quibusdam, quia, quos
        voluptatem voluptatum quod consequuntur voluptas quas doloribus natus.
        Quisquam voluptatibus, quibusdam, quia, quos voluptatem voluptatum quod
        consequuntur voluptas quas doloribus natus. Quisquam voluptatibus,
        quibusdam, quia, quos voluptatem voluptatum quod consequuntur voluptas
        quas doloribus natus. Quisquam voluptatibus, quibusdam, quia, quos
        voluptatem voluptatum quod consequuntur voluptas quas doloribus natus.
        Quisquam voluptatibus, quibusdam, quia, quos voluptatem voluptatum quod
        consequuntur voluptas quas doloribus natus. Quisquam voluptatibus,
        quibusdam, quia, quos voluptatem voluptatum quod consequuntur voluptas
        quas doloribus natus. Quisquam voluptatibus, quibusdam, quia, quos
        voluptatem voluptatum quod consequuntur voluptas quas doloribus natus.
        Quisquam voluptatibus, quibusdam, quia, quos voluptatem voluptatum quod
        consequuntur voluptas quas doloribus natus. Quisquam voluptatibus,
        quibusdam, quia, quos voluptatem voluptatum quod consequuntur voluptas
        quas doloribus natus. Quisquam voluptatibus, quibusdam, quia, quos
        voluptatem voluptatum quod consequuntur voluptas quas doloribus natus.
      </div>
    </main>
  );
}
