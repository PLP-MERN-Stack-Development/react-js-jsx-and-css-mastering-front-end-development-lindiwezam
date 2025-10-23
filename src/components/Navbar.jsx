export default function Navbar() {
    return (
        <nav className="bg-blue-600 text-white px-6 py-3 shadow-md flex justify-between items-center">
            <h1 classNae="text-xl font-bold">PLP Task Manager</h1>
            <div className="space-x-4">
                <a href="#" className="hover:underline">Home</a>
                <a href="#" className="hover:underline">About</a>
                <a href="#" className="hover:underline">Contact</a>
            </div>
        </nav>
    );
}