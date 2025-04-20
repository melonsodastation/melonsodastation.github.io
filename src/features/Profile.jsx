export default function Profile() {
  return (
    <div className="flex flex-col justify-center items-center bg-white drop-shadow-lg rounded-2xl p-10 m-10">
      <div className="w-30 h-30 mx-10 my-5 justify-center">
        <img
          className="object-fit justify-center"
          src="./bio.jpeg"
          alt="Bio photo"
        />
      </div>
      <div className="flex flex-col items-center">
        <div className="text-3xl font-bold">金　相憲</div>
        <small>melonsodastation@gmail.com</small>
        <p className="my-5 text-left">
          ほんちゃんと申します。政策科学部で都市政策について学んでいます。
        </p>
      </div>
    </div>
  );
}
