const Page = () => {
    return (
        <main className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-6">Features</h1>
            <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Feature cards would go here */}
                <div className="border p-6 rounded-lg shadow-sm">
                    <h2 className="text-xl font-semibold mb-3">Feature 1</h2>
                    <p>Description of feature 1 and its benefits.</p>
                </div>
                <div className="border p-6 rounded-lg shadow-sm">
                    <h2 className="text-xl font-semibold mb-3">Feature 2</h2>
                    <p>Description of feature 2 and its benefits.</p>
                </div>
                <div className="border p-6 rounded-lg shadow-sm">
                    <h2 className="text-xl font-semibold mb-3">Feature 3</h2>
                    <p>Description of feature 3 and its benefits.</p>
                </div>
            </section>
        </main>
    );
}
 
export default Page;