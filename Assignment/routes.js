import db from "../Database/index.js";
import Database from "../Database/index.js";

function AssignmentRoutes(app) {
    app.get("/api/assignment/:cid/assignments", (req, res) => {
        const { cid } = req.params;
        const assignments = db.assignments
            .filter((a) => a.course === cid);
        res.send(assignments);
    });

    app.post("/api/assignment/:cid/assignments", (req, res) => {
        const { cid } = req.params;
        const newAssignment = {
            ...req.body,
            course: cid,
            _id: new Date().getTime().toString(),
        };
        db.assignments.push(newAssignment);
        res.send(newAssignment);
    });

    app.delete("/api/assignment/:aid", (req, res) => {
        const { aid } = req.params;
        db.assignments = db.assignments.filter((a) => a._id !== aid);
        res.sendStatus(200);
    });

    app.put("/api/assignment/:aid", (req, res) => {
        const { aid } = req.params;
        const assignmentsIndex = db.assignments.findIndex(
            (m) => m._id === aid);
        db.assignments[assignmentsIndex] = {
            ...db.assignments[assignmentsIndex],
            ...req.body
        };
        res.sendStatus(204);
    });
}
export default AssignmentRoutes;