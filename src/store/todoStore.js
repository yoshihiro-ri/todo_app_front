import { create } from 'zustand';

const useTestTaskStore = create((set, get) => ({
    testTasksList: [{ text: "hoge", id: 3, draggableId: `b` }, { text: "hoge2", id: 5, draggableId: `a` }],

    addTestTask: (inputText, testTaskId) => set((state) => ({
        testTasksList: [...state.testTasksList, {
            id: testTaskId,
            draggableId: `task-${testTaskId}`,
            text: inputText,
        }]
    })),
    deleteTestTask: (id) => set((state) => ({
        testTasksList: get().testTasksList.filter((task) => task.id !== id)
    })),
    reorderTestTask: (testTaskList, startIndex, endIndex) => set((state) => ({
        testTaskList: testTaskList.splice(endIndex, 0, testTaskList.splice(startIndex, 1)[0])
    }))
}));


export default useTestTaskStore;