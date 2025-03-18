module.exports = async function (context, req) {
    context.res = {
        status: 200,
        body: [
            { id: 1, task: "Learn Azure Functions", completed: false },
            { id: 2, task: "Deploy To-Do App", completed: false }
        ]
    };
};
