interface DefaultState {
  loading: boolean,
  foods: {
    id: number,
    title: string,
    price: string,
    quantity: number,
    image: string, }[]
}

const defaultState: DefaultState = {
  loading: false,
  foods: [
    {
      id: 1,
      title: 'xinkali',
      price: '14',
      quantity: 10,
      image: 'public/images/xinkali.jpg',
    },
    {
      id: 2,
      title: 'hamburgeri',
      price: '23',
      quantity: 1,
      image: 'public/images/hamburger.jpg',
    },
    {
      id: 3,
      title: 'kubdari',
      price: '18',
      quantity: 1,
      image: 'public/images/kubdari.jpg',
    },
  ],
};

const FoodReducer = (state: DefaultState = defaultState, action: any) : DefaultState => {
  switch (action.type) {
    case FOOD_FAIL:
      return {
        ...state,
        loading: false,
      };
    case FOOD_START:
      return {
        ...state,
        loading: true,
      };
    case FOOD_SUCCESS:
      return {
        ...state,
        loading: false,
        foods: action.payload,
      };
    default:
      return state;
  }
};

export default FoodReducer;
