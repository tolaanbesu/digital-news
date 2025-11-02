import EditPostItem from '@/components/EditPostItem'


export default function Page({ params }: { params: { id: string } }) {
  const {id} =  params;

  return <EditPostItem id={id} />; 
}

