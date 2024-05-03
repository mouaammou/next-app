import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & share
        <span className="capitalize orange_gradient p-5 block">
          AI-Powered prompts
        </span>
      </h1>
      <p className="desc text-center">
        Welcome to the revolution AI prompts, a platform that allows you to
        discover and share AI-powered prompts.
      </p>

      <Feed />
    </section>
  );
};

export default Home;
