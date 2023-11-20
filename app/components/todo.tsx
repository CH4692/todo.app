import InputTitle from "./inputTitle";
import Checkbox from "./checkbox";
import DeleteButton from "./deleteButton";

const Todo = (props: {
  title: string | undefined;
  completed: boolean | undefined;
  id: string | undefined;
}) => {
  return (
    <div className=" w-full max-w-2xl">
      <table className="table w-full">
        <tbody className="">
          <tr className="flex justify-between ">
            <td>
              {props.id !== undefined && (
                <Checkbox id={props.id} completed={props.completed} />
              )}
            </td>
            <td>
              <InputTitle completed={props.completed} title={props.title} />
            </td>
            <td>{props.id !== undefined && <DeleteButton id={props.id} />}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Todo;
