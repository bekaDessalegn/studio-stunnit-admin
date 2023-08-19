import Head from 'next/head'
import { useState } from 'react'
import AddProject from '../../components/add-project'
import LeftRightAligner from '../../components/left-right-aligner'
import Navbar from '../../components/navbar'
import ProjectsList from '../../components/projects_list'
import apiUrl from '../../config'

const projects = ({ projects }) => {

  const [allProjects, setAllProjects] = useState(projects)
       
        return <>
                <Head>
                        <title>Studio Stunnit Admin</title>
                        <meta name="description" content="This is the studio sunnit admin" />
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                        <link rel="icon" href="/favicon.ico" />
                </Head>
                <main className='' >
                        <Navbar />
                        <LeftRightAligner>
                                <div className='h-8'></div>
                                {allProjects?.projects?.length ? <ProjectsList projects={allProjects} deleteProject={id => setAllProjects({ projects: allProjects.projects.filter(project => project.id !== id) })} /> : <span></span>}
                                <div className='h-16'></div>
                                <AddProject addProject={project => setAllProjects({ projects: [...allProjects.projects, project] })} />
                        </LeftRightAligner>
                        <div className='h-8'></div>
                </main>
        </>
}

export default projects


export async function getServerSideProps() {
        try {
          let headersList = {
            "Accept": "*/*",
          }
          let response = await fetch(`${apiUrl}/projects`, {
            method: "GET",
            headers: headersList
          });
      
          let data = await response.text();
          const projects = JSON.parse(data);
      
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