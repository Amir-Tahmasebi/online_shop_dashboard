import { AttributeGroupState } from "./../attribute/AttributeGroup.type";

type ActionType = {
  type: string;
  payload: any;
};

type CategoriesState = {
  groups: AttributeGroupState[];
};

const initState: CategoriesState = {
  groups: [
    {
      title: "color",
      attributes: [],
    },
  ],
};

export const reducer = (
  state: CategoriesState = initState,
  action: ActionType
) => {
  let newState = state;
  switch (action.type) {
    case "ADD_NEW_CATEGORY":
      newState = {
        ...state,
        groups: [...state.groups, action.payload],
      };
      break;
    // case "ADD_NEW_ATTRIBUTE":
    //   newState = {
    //     ...state,
    //     groups: state.groups.map((group) => {
    //       if (group.id === action.payload.groupID) {
    //         return {
    //           ...group,
    //           attributes: [...group.attributes, action.payload.attribute],
    //         };
    //       }
    //       return group;
    //     }),
    //   };
    //   break;
  }
  return newState;
};
