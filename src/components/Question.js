import QuestionNavBar from "./QuestionNavBar";  


function Question() {
  return (
    <div className="border-2 max-w-screen-xl min-h-screen shadow-2xl flex">
        <QuestionNavBar />
        <div className="min-h-screen w-full border flex flex-col ml-12">
            <div className="border-2 flex flex-col text-left mt-16 mb-8 w-11/12 h-48 rounded-md pt-8 pl-6">
                <p>Q1:</p>
                <p>Question</p>
            </div>
            <div className="flex flex-col text-left mb-16 ml-4">
                <ul>
                    <li className="mb-2 list-[circle]">option 1</li>
                    <li className="mb-2 list-[circle]">option 2</li>
                    <li className="mb-2 list-[circle]">option 3</li>
                    <li className="mb-2 list-[circle]">option 4</li>
                </ul>
            </div>
            <div className="flex justify-center items-center">
                <button className="text-xl border py-2 px-20 bg-blue mr-10 text-white">Previous</button>
                <button className="text-xl border py-2 px-20 bg-blue ml-10 text-white">Next</button>
            </div>
        </div>
    </div>  
  );
}

export default Question;