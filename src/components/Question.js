import QuestionNavBar from "./QuestionNavBar";  


function Question() {
  return (
    <div>
        <QuestionNavBar />
        <div>
            <p>Q1:</p>
            <p>Question</p>
        </div>
        <div>
            <ul>
                <li>option 1</li>
                <li>option 2</li>
                <li>option 3</li>
                <li>option 4</li>
            </ul>
        </div>
        <div>
            <button>Previous</button>
            <button>Next</button>
        </div>
    </div>  
  );
}

export default Question;