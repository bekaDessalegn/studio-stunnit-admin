import type { NextPage } from 'next'
import apiUrl from '../config'
import Projects from './projects/index'

const Home: NextPage = (projects) => {

  return (
    <>
      <Projects projects={projects} />
    </>
  )
}

export async function getServerSideProps() {
  try {
    let res = await fetch(`${apiUrl}/projects`);
    let projects = await res.json();
    return {
      props: {
        projects: projects,
      }
    };
  } catch (error) {
    console.error(error)

    return {
      props: {
        projects: [],
        error: error
      }
    };
  }
}

export default Home