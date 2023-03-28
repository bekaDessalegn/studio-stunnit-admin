import type { NextPage } from 'next'
import Projects from './projects/index'
import apiUrl from '../config'

const Home: NextPage = (projects) => {
  return (
    <>
    <Projects projects={projects}/>
    </>
  )
}

export default Home

export async function getStaticProps() {

  try {
    let res = await fetch(`${apiUrl}/projects`);
    let projects = await res.json();
    return {
        props : {
          projects: projects,
        }
    };
  } catch (error) {
    console.error(error)

    return {
      props : {
          projects : [],
          error : error
      }
  };
  }
}



// function addProject(project: any) {
//   console.log("ccccccccccccccccccccccccccccccccccccccc")
//   console.log(projects)
//   // projects.push(project)
// }