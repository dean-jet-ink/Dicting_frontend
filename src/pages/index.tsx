import Button from "@/components/button/Button";

const Home = () => {
  return (
    <>
      <h1>Top Page</h1>
      <Button
        onClick={() => {
          console.log("Hello World");
        }}
        variant="secondary"
      >
        テスト
      </Button>
    </>
  );
};

export default Home;
